import React from "react";
import CommonInput from "./UI/input/CommonInput";
import CommonSelect from "./UI/select/CommonSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <CommonInput 
        placeholder="Search..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        />
        <CommonSelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort"
          options={[
            { value: "title", name: "By title" },
            { value: "body", name: "By body" },
          ]}
        />
      </div>
    )
}

export default PostFilter