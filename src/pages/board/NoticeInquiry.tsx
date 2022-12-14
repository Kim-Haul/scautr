import React from 'react';
import styled from 'styled-components';
import Mobile from '../../components/exception/Mobile';
import NoticeInquiryTable from '../../components/table/NoticeInquiryTable';

const NoticeInquiry = () => {
  return (
    <Wrap>
      <Container>
        <Top>
          <div className="top_left">
            <select>
              <option value="all">All</option>
              <option value="use">사용문의</option>
              <option value="etc">기타문의</option>
            </select>
            <input type="text" placeholder="검색" />
            <button className="btn_left">검색</button>
            <button className="btn_right">초기화</button>
          </div>
        </Top>
        <Content>
          {/* -------- 문의사항 테이블 -------- */}
          <table>
            <thead>
              <tr>
                <th className="th0">NO</th>
                <th className="th1">분류</th>
                <th className="th2">답변상태</th>
                <th className="th3">제목</th>
                <th className="th4">작성자</th>
                <th className="th5">작성일</th>
              </tr>
            </thead>
            <NoticeInquiryTable />
          </table>
          <Mobile />
        </Content>
      </Container>
    </Wrap>
  );
};

export default NoticeInquiry;

const Wrap = styled.div`
  width: 100%;
`;

const Container = styled.div`
  border: 1px solid #e9edf3;
  padding: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  .top_left {
    @media (max-width: 1100px) {
      width: 100%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    select {
      margin-right: 20px;
      padding: 10px;
      width: 146px;
      height: 40px;
      border: 1px solid #e9edf3;
      font-size: 1.6rem;
      @media (max-width: 1100px) {
        width: 24%;
        margin-right: 10px;
      }
    }
    input {
      margin-right: 20px;
      padding: 10px;
      width: 292px;
      height: 40px;
      border: 1px solid #e9edf3;
      font-size: 1.6rem;
      &:focus::placeholder {
        color: transparent;
      }
      @media (max-width: 1100px) {
        width: 36%;
        margin-right: 10px;
      }
    }
  }

  button {
    width: 106.1px;
    height: 40px;
    font-weight: 700;
    font-size: 1.6rem;
    @media (max-width: 1100px) {
      width: 23%;
    }
  }
  .btn_left {
    margin-right: 7px;
    background-color: ${(props) => props.theme.color.PastelBlue};
  }

  .btn_right {
    background-color: #f6f7fb;
    border: 1px solid #e9edf3;
    color: #9497a8;
  }
`;

const Content = styled.div`
  table {
    width: 100%;
    margin-top: 10px;
    border-collapse: collapse;
    // 화면 축소시 테이블 column 깨지는거 방지
    @media (max-width: 1400px) {
      display: none;
    }
    th {
      padding: 10px;
      background-color: #f6f7fb;
      border: 1px solid #e9edf3;
    }

    .th0 {
      width: 5rem;
    }
    .th1 {
      width: 10rem;
    }
    .th2 {
      width: 10rem;
    }
    .th3 {
      width: 33rem;
    }
    .th4 {
      width: 11rem;
    }
    .th5 {
      width: 10rem;
    }
  }
`;
