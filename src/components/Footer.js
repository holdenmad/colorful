import React from 'react';

import {
    Paint as GrommetIcon,
    Github,
} from 'grommet-icons';

import { Anchor, Box, Footer, Text } from 'grommet';

function Media() {
    return (
        <div>
            <Box direction="row" gap="xxsmall" justify="center">

                <Anchor
                    a11yTitle="Check out our Respository on Github"
                    href="https://github.com/holdenmad/colors"
                    icon={<Github color="white" />}
                    target="_blank"
                />
                <Anchor
                    a11yTitle="Check out our Respository on Github"
                    href="https://github.com/jbello88/scraper"
                    icon={<Github color="white" />}
                    target="_blank"
                />
            </Box>
        </div>
    );
}


function Footer1() {
    return (
        <Footer elevation="medium" flex className="footer" background="light-4" pad="medium" justify="between">
            <Box align="center" direction="row" gap="xsmall">
                <GrommetIcon color="white" size="medium" />
                <Text alignSelf="center" color="white" size="small">
                    Colorful
                </Text>
            </Box>
            <Media />
            <Text textAlign="center" size="xsmall" color="white">
                ©Copyright
            </Text>
        </Footer>
    );
}


export default Footer1;