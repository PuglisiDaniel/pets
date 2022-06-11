import { HeaderContainer, Logo, ContainerLinks } from "./headerADM.style"
import { Link, Box } from "@mui/material";
import NextLink from 'next/link'

export default function HeaderADM() {
    return (
        <HeaderContainer>
            <div>
                <Logo src={"/imagens/logo.svg"} alt={'Adote um pet'} />
                <ContainerLinks>
                    <Link component={NextLink} href={'/pets/register'}>
                        <a>Cadastrar pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/report'}>
                        <a>Relatório{' '}
                            <Box component={'span'} sx={{ display: { sm: 'initial', xs: 'none' } }}>
                                de adoção
                            </Box>
                        </a>
                    </Link>
                </ContainerLinks>

            </div>

        </HeaderContainer>
    );
}