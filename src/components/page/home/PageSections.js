import { React, useState } from 'react'
import { Grid, Divider, Image, Button, Header } from 'semantic-ui-react'
import Workflows from '../../component/Workflows';

const PageSections = () => {

  const [workFlowOrder, setWorkflowOrder] = useState(true);

  const handleWorkFlowOrder = (val) => {
    setWorkflowOrder(val);
  }
  // Cut transparent png images using screenshots and photoshop
  // Semantic UI React Grid widths stopped working, 
  // but kept using them for CSS declarations
  // Didn't add "Name" and "Created" Column headers because ran out of time
  // Same for solid bottom border under column headers
  // Set up some folder structure
  // Copied down the semantic-forest slate theme. Didn't implement
  return (
    <>
      <Grid divided>
        <Grid.Column width={14}></Grid.Column>
        <Grid.Column width={2}>
          <Header size='small'>Order</Header>
          <Button inverted active onClick={() => handleWorkFlowOrder(true)}>
            A to Z
          </Button>
          <Button inverted onClick={() => handleWorkFlowOrder(false)}>
            Z to A
          </Button>
        </Grid.Column>
        <Grid.Column width={14}></Grid.Column>
        <Divider />
        <Grid.Column width={14}>
          <div className="workflowHeader">
            <div className="logo">
              <Image src={require('../../../images/quadric-logo.png')} />
              <Header size='huge'>Workflows</Header>
            </div>
            <div id="nav">
              <Button>
                <Image src={require('../../../images/previous.png')} />
                <span>previous</span>
              </Button>
              <Button>
                <span>next</span>
                <Image src={require('../../../images/next.png')} />
              </Button>
            </div>
          </div>
          <Workflows order={workFlowOrder} />
        </Grid.Column>
        <Grid.Column width={14}></Grid.Column>
      </Grid>
    </>
  )
}

export default PageSections