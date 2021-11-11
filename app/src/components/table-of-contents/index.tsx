import { Link } from "gatsby";
import React from "react";
import tableOfContents from "../../contexts/table-of-contents";

const TableOfContents: React.FC = () => {
  const TableOfContentsContext = tableOfContents.useTableOfContentsContext();
  return (
    <ul>
      {TableOfContentsContext.map((content) => (
        <li key={content.id}>
          <Link to={content.link}>
            <p>title: {content.title}</p>
            <p>created_at: {content.date?.toString()}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContents;
