import React, { Component } from "react";
import { Form, Grid, Radio, Input } from "semantic-ui-react";
import { setSiteSettings } from "../../actions/utilActions";

export default class SiteSettings extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} textAlign="left">
            <b>Allow user registration</b>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form>
              <Form.Group>
                <Form.Field>
                  <Radio
                    label="Allow"
                    name="radioGroup"
                    onChange={() =>
                      this.props.dispatch(
                        setSiteSettings({ allow_registration: true })
                      )
                    }
                    checked={this.props.allow_registration}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="Do not allow"
                    name="radioGroup"
                    onChange={() =>
                      this.props.dispatch(
                        setSiteSettings({ allow_registration: false })
                      )
                    }
                    checked={!this.props.allow_registration}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
