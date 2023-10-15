import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';

import Check from '../../assets/svg/check.svg';
import {addTask} from '../../redux/slices/taskSlice';
import {dateToFormat} from '../../utils/Dateutiles';
import Frame from '../../components/Frame';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import styles from './style';
import Txt from '../../components/Txt';
import Input from '../../components/input';

const AddTask = ({navigation}) => {
  const dispatch = useDispatch();

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const handleAddTask = () => {
    if (title || desc) {
      dispatch(
        addTask({
          id: uuid.v4(),
          date,
          title,
          desc,
        }),
      );
      navigation.pop();
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomTouchableOpacity onPress={handleAddTask}>
          {title || desc ? <Check /> : null}
        </CustomTouchableOpacity>
      ),
    });
  }, [title, desc]);

  return (
    <>
      <Frame>
        <CustomTouchableOpacity
          onPress={() => {
            setOpenDate(true);
          }}>
          <Txt
            style={styles.dateTxt}>
            {dateToFormat(new Date(date))}
          </Txt>
        </CustomTouchableOpacity>
        <Input
          placeholder="Title"
          style={styles.input}
          autoFocus={true}
          value={title}
          onChangeText={setTitle}
        />
        <Input
          placeholder="Note your description Here"
          numberOfLines={30}
          style={styles.textArea}
          onChangeText={setDesc}
        />
      </Frame>
      <DatePicker
        modal
        open={openDate}
        date={date}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
    </>
  );
};

export default AddTask;
