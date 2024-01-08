'use client';

import { Column, Grid } from '@carbon/react';

function DevelopmentPage() {
    return (
        <Grid className="development-page">
            <Column lg={16} md={8} sm={4} className="development-page__r1">
                <div>THIS PAGE IS UNDER DEVELOPMENT</div>
            </Column>
        </Grid>
    );
}

export default DevelopmentPage;