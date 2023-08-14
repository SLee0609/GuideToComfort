import AsyncStorage from "@react-native-async-storage/async-storage";
import Mood from "../models/mood";

let data = [];
let dateNums = [];

const setData = (d) => {
  const today = new Date(new Date().toDateString());

  data = d;
  for (i = 0; i < data.length; i++) {
    data[i].date = new Date(Date.parse(data[i].date));
  }

  if (data.length != 0) {
    let firstData = data[0];
    let recent = data[data.length - 1];
    data.unshift(
      new Mood(
        firstData.mood,
        new Date(
          new Date(firstData.date.getTime()).setDate(
            firstData.date.getDate() - 1
          )
        ),
        true
      )
    );
    data.push(
      new Mood(
        recent.mood,
        new Date(new Date(today.getTime()).setDate(today.getDate() + 1)),
        true
      )
    );
  } else {
    const today = new Date(new Date().toDateString());
    const yesterday = new Date(
      new Date(today.getTime()).setDate(today.getDate() - 1)
    );
    const tomorrow = new Date(
      new Date(today.getTime()).setDate(today.getDate() + 1)
    );

    data.push(new Mood("Okay", yesterday, true));
    data.push(new Mood("Okay", today, true));
    data.push(new Mood("Okay", tomorrow, true));
  }
  dateNums = getDaysBetween(
    new Date(data[1].date.getTime()),
    new Date(
      new Date(data[data.length - 1].date.getTime()).setDate(
        data[data.length - 1].date.getDate() - 1
      )
    )
  );
  return;
};

const addData = async (d) => {
  const yesterday = new Date(
    new Date(d.date.getTime()).setDate(d.date.getDate() - 1)
  );
  const tomorrow = new Date(
    new Date(d.date.getTime()).setDate(d.date.getDate() + 1)
  );

  const recent = data[data.length - 2];

  if (data.length == 3 && recent.date.getTime() == d.date.getTime()) {
    data = [];
    data.push(new Mood(d.mood, yesterday, true));
    data.push(d);
    data.push(new Mood(d.mood, tomorrow, true));
  } else {
    if (recent.date.getTime() == d.date.getTime()) {
      data[data.length - 2] = d;
    } else {
      data.splice(data.length - 1, 0, d);
      dateNums.push(d.date);
    }
    data[data.length - 1].mood = d.mood;
    data[data.length - 1].date = tomorrow;
  }

  let storeData = [...data];
  storeData.pop();
  storeData.shift();
  await AsyncStorage.setItem("mood", JSON.stringify(storeData));

  return;
};

const getDaysBetween = (start, end) => {
  let arr = [];
  let curr = new Date(start.getTime());
  while (curr.getTime() <= end.getTime()) {
    arr.push(new Date(curr.getTime()));
    curr = new Date(new Date(curr.getTime()).setDate(curr.getDate() + 1));
  }
  return arr;
};

export { data, dateNums, setData, addData };
