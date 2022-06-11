import { NextPage } from "next";
import { useRegister } from "../../data/hooks/pages/pets/useRegister";
import Title from "../../ui/components/title/Title"
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";

const Register: NextPage = () => {

    const {
        name,
        setName,
        story,
        setStory,
        photo,
        setPhoto,
        message,
        setMessage,
        registerIT,

    } = useRegister();


    return (
        <>
            <Title
                title={'Cadastro de pets para adoção'}
                subtitle={'Preencha os dados do novo pet'} />
            <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5 }} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            label={'Nome'}
                            placeholder={'Digite o nome do Pet'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={story}
                            onChange={(e)=> setStory(e.target.value)}
                            label={'História do pet'}
                            placeholder={'Escreva a história do pet'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={photo}
                            onChange={(e)=> setPhoto(e.target.value)}
                            label={'Foto'}
                            placeholder={'Digite o endereço da imagem'}
                            fullWidth
                        />

                        <Button
                            
                            variant="contained"
                            color={"secondary"}
                            sx={{ mt: 2 }}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}

                        >
                            Enviar imagem

                        </Button>
                    </Grid>

                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            onClick={registerIT} 
                            variant="contained" 
                            fullWidth 
                            sx={{maxWidth: {md: 200}, mt: 4}}
                        >
                            Cadastrar Pet
                        </Button>


                    </Grid>

                </Grid>
            </Paper>
            <Snackbar 
                open={message.length > 0} 
               
                autoHideDuration={2500}
                onClose={()=>setMessage('')}
                message={message}
            />

            


        </>
    )
}

export default Register;