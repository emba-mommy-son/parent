import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

import MadIcon from '@/assets/svgs/mad.svg';
import SadIcon from '@/assets/svgs/sad.svg';
import SmileIcon from '@/assets/svgs/smile.svg';
import Colors from '@/constants/Colors';
import { dateToString } from '@/utils/formatter/DateFormat';

interface CalendarDateProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface TempDateProps {
  dateString: DateString;
  marked: boolean;
  feel: 'smile' | 'mad' | 'sad';
}

const CalendarContainer = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<DateString>(dateToString(today));

  // 최근 100일 날짜 리스트(임시 목업)
  const [tempDateList, setTempDateList] = useState<TempDateProps[]>(
    Array(100)
      .fill({ dateString: dateToString(today), marked: false, feel: 'smile' })
      .map((date, index) => ({
        ...date,
        dateString: dateToString(new Date(today.getTime() - index * 24 * 60 * 60 * 1000)),
        feel: index % 3 === 0 ? 'mad' : index % 3 === 1 ? 'sad' : 'smile',
      })),
  );

  const getFeelIcon = (feel: 'smile' | 'mad' | 'sad') => {
    switch (feel) {
      case 'smile':
        return <SmileIcon width={32} height={32} />;
      case 'mad':
        return <MadIcon width={32} height={32} />;
      case 'sad':
        return <SadIcon width={32} height={32} />;
    }
  };

  return (
    <View className="flex-1">
      <Calendar
        theme={{ arrowColor: Colors.PRIMARY, alignHeaders: 'center' }}
        style={{ flex: 1 }}
        initialDate={dateToString(today)}
        onDayPress={() => {}}
        onMonthChange={() => {}}
        markingType="dot"
        dayComponent={({ date, state, marking }: { date: CalendarDateProps; state: string; marking: any }) => {
          return (
            <View
              className="flex-1 items-center justify-center p-0.5"
              style={
                state === 'disabled'
                  ? { opacity: 0.2 }
                  : date.dateString === selectedDate
                    ? { backgroundColor: 'rgba(248, 255, 56, 0.5)', borderRadius: 50 }
                    : {}
              }>
              <TouchableOpacity
                disabled={state === 'disabled' ? true : undefined}
                onPress={() => {
                  setSelectedDate(date.dateString);
                  console.log(date, state, marking);
                }}
                className="flex-1 items-center justify-center flex gap-1">
                <Text className="text-sm text-my_black font-base">{date.day}</Text>
                <View>
                  {tempDateList.find(tempDate => tempDate.dateString === date.dateString)?.feel ? (
                    getFeelIcon(tempDateList.find(tempDate => tempDate.dateString === date.dateString)?.feel ?? 'smile')
                  ) : (
                    <View className="w-8 h-8" />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CalendarContainer;
