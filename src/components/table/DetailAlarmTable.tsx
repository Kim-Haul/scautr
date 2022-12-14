import React from 'react';
import styled from 'styled-components';

const DetailAlarmTable = () => {
  return (
    <Tbody>
      <tr>
        <td>2022-11-23 07:09:20</td>
        <td>2022-11-23 07:17:38</td>
        <td>접착기 3번 온도상태 점검 알람</td>
      </tr>
      <tr>
        <td>2022-11-23 07:09:20</td>
        <td>2022-11-23 07:17:38</td>
        <td>접착기 3번 온도상태 점검 알람</td>
      </tr>
      <tr>
        <td>2022-11-23 07:09:20</td>
        <td>2022-11-23 07:17:38</td>
        <td>접착기 3번 온도상태 점검 알람</td>
      </tr>
      <tr>
        <td>2022-11-23 07:09:20</td>
        <td>2022-11-23 07:17:38</td>
        <td>접착기 3번 온도상태 점검 알람</td>
      </tr>
      <tr>
        <td>2022-11-23 07:09:20</td>
        <td>2022-11-23 07:17:38</td>
        <td>접착기 3번 온도상태 점검 알람</td>
      </tr>
    </Tbody>
  );
};

export default DetailAlarmTable;

const Tbody = styled.tbody`
  td {
    padding: 10px;
    border: 1px solid #ced4da;
    text-align: center;
  }
`;
