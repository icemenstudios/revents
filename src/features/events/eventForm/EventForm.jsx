import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen}) {
    return (
        <Segment clearing>
            <Header content='Create new event' />
            <Form>
            <Form.Field>
                <input type="text" placeholder ='Event title' />
                <input type="text" placeholder ='Category' />
                <input type="text" placeholder ='Description' />
                <input type="text" placeholder ='City' />
                <input type="text" placeholder ='Venue' />
                <input type="date" placeholder ='Date' />
            </Form.Field>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel' />

            </Form>
        </Segment>
    )
}