import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
const Page = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(respond.data.query.search);
      console.log(respond.data.query.search);
    };

    if (term) {
      search();
    }
  }, [term]);

  const fetchResult = result.map((item, idx) => {
    return (
      <tr>
        <th scope="row" key={item.pageId}>
          {idx + 1}
        </th>
        <td>{item.title}</td>
        <td>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="my-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Search Input
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Search"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
              </tr>
            </thead>
            <tbody>{fetchResult}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
