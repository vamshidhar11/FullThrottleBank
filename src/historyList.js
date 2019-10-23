import React from 'react';

export default function HistoryList(props) {
  console.log(props);
  const { historyList } = props;

  const list = historyList.map((list, index) => {
    return (
      <tbody key={index}>
        <tr>
          <td>$ {list.principal.amount}</td>
          <td>{list.numPayments} Months</td>
        </tr>
      </tbody>
    );
  });
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Principal</th>
            <th>Tenure</th>
          </tr>
        </thead>
        {list}
      </table>
    </div>
  );
}
