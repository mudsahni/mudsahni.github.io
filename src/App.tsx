import * as React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Placeholder, Segment } from 'semantic-ui-react'
import Backdrop from './components/atoms/Backdrop';
import { Bar } from './components/atoms/Bar';
import './App.css'
import { getRandomArray } from './util/helper';
import DynamicChart from './components/organisms/DynamicChart';

interface AppProps {

}

export const App: React.FC<AppProps> = ({ }) => {
    const array: number[] = getRandomArray(10, 0, 100);

    return (

        <Grid stackable centered columns={12}>
            <Grid.Row centered columns={1}>
                <Grid.Column>
                    <Segment>
                        <DynamicChart randomArray={array} />
                    </Segment>
                    <Segment placeholder>

                    </Segment>
                </Grid.Column>

            </Grid.Row>
            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <Segment>
                        <Placeholder>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Placeholder>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Placeholder>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

        </Grid>

    );
}