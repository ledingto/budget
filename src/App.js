import { Container, Header, Statistic, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import './App.css';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.00</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1,000.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>600.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type="h3" />
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Restaurant</Grid.Column>
            <Grid.Column width={3} textAlign="right">10.00</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Grocery</Grid.Column>
            <Grid.Column width={3} textAlign="right">44.00</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Paycheck</Grid.Column>
            <Grid.Column width={3} textAlign="right">2500.00</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Rent</Grid.Column>
            <Grid.Column width={3} textAlign="right">1000.00</Grid.Column>
            <Grid.Column width={3} textAlign="center">
              <Icon name="edit" />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add New Transaction" type="h3" />
      <Form unstackable>
        <Form.Group>
          <Form.Input icon="tags" width={12} label="Name" placeholder="New item" />
          <Form.Input icon="dollar" iconPosition="left" width={4} label="Price" placeholder="0.00" />
        </Form.Group>
        <Button.Group style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Save</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
