import { Table } from 'components/pathfinding/Table'
import { PathFindingContextProvider } from 'contexts/PathFindingContext'
import { styled } from 'lib/stitches'

import { ChevronDownIcon } from '@radix-ui/react-icons'

const PageLayout = styled('div', {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    userSelect: 'none',
    backgroundColor: '$violet1',
})

const TableWrapper = styled('div', {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
})

const NavigationContainer = styled('div', {
    height: 120,
})

const Navigation = styled('div', {
    display: 'flex',
    height: 'calc(50% + 10px)',
    width: '100%',
    backgroundColor: '$violet5',
    color: '$gray12',
    p: 15,

    alignItems: 'center',
})

const PageTitle = styled('h1', {
    fontSize: '$5',
})

const NavigationItems = styled('nav', { ml: 100 })
const NavigationItem = styled('div', {
    display: 'flex',
    p: 10,
    color: '$gray12',
    backgroundColor: '$pink10',
    alignItems: 'center',
    transition: 'all 500ms ease',
    borderRadius: 5,
    '& :hover': {
        color: '$gray12',
    },
})
const NavigationItemText = styled('p', { mr: 5, fontWeight: '600' })

const Pathfinding: React.FC = () => {
    return (
        <PathFindingContextProvider>
            <PageLayout>
                <NavigationContainer>
                    <Navigation>
                        <div>
                            <PageTitle>Pathfinder</PageTitle>
                        </div>
                        <NavigationItems>
                            <NavigationItem>
                                <NavigationItemText>
                                    Algorithms
                                </NavigationItemText>
                                <ChevronDownIcon />
                            </NavigationItem>
                        </NavigationItems>
                    </Navigation>
                </NavigationContainer>
                <TableWrapper>
                    <Table />
                </TableWrapper>
            </PageLayout>
        </PathFindingContextProvider>
    )
}

export default Pathfinding
