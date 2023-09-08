import { useEffect, useState } from "react"
import axios from "axios"

// components
import AddEmployee from "../components/AddEmployee"
import FormTable from "../components/FormTable"

// axios.defaults.baseURL =  "http://localhost:4000/api/employees"

const Employee = () => {
    return (
        <div>
          <AddEmployee/>
          <FormTable/>
        </div>
      )

}
  
  export default Employee