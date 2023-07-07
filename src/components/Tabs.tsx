import React, { useState } from 'react';
import "../styles/Tabs.style.css"

interface TableItem {
	id: number;
	name: string;
	age: number;
  }
  
  const TableContent: React.FC = () => {
	const tableData: TableItem[] = [
	  { id: 1, name: 'John Doe', age: 30 },
	  { id: 2, name: 'Jane Smith', age: 25 },
	  { id: 3, name: 'Mark Johnson', age: 35 },
	];
  
	return (
	  <table className="table">
		<thead>
		  <tr>
			<th>ID</th>
			<th>Name</th>
			<th>Age</th>
		  </tr>
		</thead>
		<tbody>
		  {tableData.map((item) => (
			<tr key={item.id}>
			  <td>{item.id}</td>
			  <td>{item.name}</td>
			  <td>{item.age}</td>
			</tr>
		  ))}
		</tbody>
	  </table>
	);
  };

interface TabData {
  title: string;
  content: JSX.Element;
}

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabData: TabData[] = [
    { title: 'Users', content: <TableContent /> },
    { title: 'Friends', content: <TableContent /> },
    { title: 'Blocked', content: <TableContent /> },
	{ title: 'Leaderboard', content: <TableContent /> },
	{ title: 'Match history', content: <TableContent /> },
  ];

  return (
    <div className="tabs">
      <div className="tab-header">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabData[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
