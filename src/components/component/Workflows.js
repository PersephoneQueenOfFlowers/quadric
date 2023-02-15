// import _ from 'lodash'
import {React, useState, useEffect} from 'react'
import {Image, Button, Header } from 'semantic-ui-react'
import Moment from 'react-moment';

const Workflows = ({ order }) => {

  // was playing with conditionally updating rendering order with left column 
  // button press
  // useEffect(() => {
  //   console.log("order: ", order);
  //   
  // },[order]);

  const [ workflows, setWorkflows] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3001/workflows')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWorkflows(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (    
      <ul>
        {
          workflows.slice(0).reverse().map((workflow, index) => {
            return <li key={index}>
              <div className="idAndstatus">
                <Header size='small'>Workflow {workflow.id}</Header>
                <Button className={`${workflow.status}`}>{workflow.status}
                </Button>
              </div>
              <div className="dateAndExpandWorkflow">
                <Image src={require('../../images/calendar-icon.png')} />
                <p><Moment format="MMMM Do YYYY, h:mm:ss a">
                  {workflow.created_at}</Moment>
                </p>
                <Button inverted>
                  <Image src={require('../../images/next.png')} />
                </Button>
              </div>
            </li>
          })}
      </ul>
    )
  };

export default Workflows