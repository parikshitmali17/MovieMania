import react, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import  Style from '../assets/styles.css';
import DiscoverMovie from "./DiscoverMovie";

function BasicPagination() {
  const [pageNo, setPageNo] = useState(1);
  function handleChange(event) {
  
    setPageNo(event.target.innerText);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
   
  }
  

  return (
    <div>
      <DiscoverMovie pageNumber={pageNo} />
      <div className="parentToPagination">
        <Stack spacing={2}>
          <Pagination
            onClick={handleChange}
            className="Pagination"
            count={20}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default BasicPagination;
