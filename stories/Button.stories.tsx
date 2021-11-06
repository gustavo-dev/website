import { action } from '@storybook/addon-actions'

import Button from 'components/Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Button',
    component: Button,
}

export const Primary = () => (
    <Button variant="primary" onClick={action('ButtonClicked')}>
        Primary
    </Button>
)

export const Secondary = () => (
    <Button variant="secondary" onClick={action('ButtonClicked')}>
        Secondary
    </Button>
)
