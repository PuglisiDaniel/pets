
import { NextPage } from "next";
import Title from "../../ui/components/title/Title";
import {
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Paper
} from "@mui/material";

import { useReport } from "../../data/hooks/pages/pets/useReport";


const Report: NextPage = () => {

    const { listReport } = useReport();
    return (
        <>
            <Title
                title={'Relatório de Adoções'}
                subtitle={'Veja a lista de pets adotados'}
            />

            <TableContainer component={Paper}
                sx={{ maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align={'right'}>Valor mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listReport.map((report) => (
                            <TableRow key={report.id} >
                                <TableCell>{report.pet.name}</TableCell>
                                <TableCell>{report.email}</TableCell>
                                <TableCell align={'right'}>{report.valor}</TableCell>
                            </TableRow>

                        ))}

                    </TableBody>
                </Table>


            </TableContainer>

        </>
    )
}

export default Report;