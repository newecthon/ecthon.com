import { Link } from "@chakra-ui/next-js";

interface ILink {
    path: string
    label: string
}
export function NavItem({path, label, ...rest}: ILink) {
    return (
        <Link href={path}
                        padding=' 8px 16px'
                        borderRadius='10px'
                        transition='background 1s'
                        border='1px solid transparent'
                        color="#83868A"
                        _hover={{
                            textDecor: 'none',
                            background: '#1A1A1A',
                            border: '1px solid #282828',
                            color: '#F2F2F2'
                        }}
                        {...rest}
                    >
                        {label}
                    </Link>
    )
}