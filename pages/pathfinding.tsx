import React from 'react'
import { Table } from 'components/pathfinding/Table'
import { PathFindingContextProvider } from 'contexts/PathFindingContext'
import { styled } from 'lib/stitches'

import { SiteLayout } from 'components/SiteLayout'
import { Title } from 'components/styled/Text'
import { YTInteraction } from 'components/YTInteraction'

const TableWrapper = styled('div', {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
})

const NavigationContainer = styled('div', {})

const Navigation = styled('div', {
    display: 'flex',
    width: '100%',
    backgroundColor: '$bg-3',
    color: '$gray12',

    alignItems: 'center',
})

const NavigationItem = styled('div', {
    display: 'flex',

    userSelect: 'none',

    boxSizing: 'border-box',

    cursor: 'pointer',

    justifyContent: 'center',
    alignItems: 'center',

    height: 70,

    px: 15,
})

const Pathfinding: React.FC = () => {
    return (
        <PathFindingContextProvider>
            <SiteLayout>
                <Title>Pathfinding Algorithms</Title>
                <NavigationContainer>
                    <Navigation>
                        <YTInteraction>
                            <NavigationItem>Pause</NavigationItem>
                        </YTInteraction>
                    </Navigation>
                </NavigationContainer>
                <TableWrapper>
                    <Table />
                </TableWrapper>
            </SiteLayout>
        </PathFindingContextProvider>
    )
}

export default Pathfinding
