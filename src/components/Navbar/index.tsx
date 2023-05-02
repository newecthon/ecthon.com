import { styled } from "@stitches/react"

export function Navbar() {
    return (
        <Header>
            <HeaderContent>
            <Logo>E.</Logo>
            <Nav>
                <NavItem href="">Home</NavItem>
                <NavItem href="">Portfolio</NavItem>
                <NavItem href="">Contato</NavItem>
            </Nav>

            </HeaderContent>
        </Header>
    )
}

const Header = styled('header', {
    display: 'flex',
    width: '100%',
    height: '80px',
    alignItems: 'center'
})

const HeaderContent = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '1120px',
    margin: '0 auto'
})

const Nav = styled('nav', {
    display: 'flex',
    gap: '32px'
})

const Logo = styled ('a', {
    textDecoration: 'none'
})

const NavItem = styled ('a', {
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    background: 'transparent',

    '&:hover': {
        background: '#c1c2c3'
    }
})