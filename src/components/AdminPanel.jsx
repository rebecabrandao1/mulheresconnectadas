import React, { useEffect, useState, useContext } from 'react';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import GetStarted from './GetStarted';
import { Link } from 'react-router-dom';
import ButtonColorContext from './buttoncolorcontext';



const AdminPanel = ({ setFormularioData }) => {
  const { updateButtonColor } = useContext(ButtonColorContext);
  const [color, setColor] = useState('');
  const [inputValue, setInputValue] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormularioData(inputValue);

    setInputValue('');

   
    updateButtonColor(color);
    setColor('');
  };
  const [courseData, setCourseData] = useState({ title: '', description: '', image: null });
  const [trackData, setTrackData] = useState({ title: '', video: '', content: '', summary: '', pdf: '', downloadVideo: false });
  const [courses, setCourses] = useState([]);
  const [cor, setCor] = useState('');

  const trocarCor = (event) => {
    event.preventDefault();
    const corEscolhida = document.getElementById('bgcolor').value;
    setCor(corEscolhida);
  };

  useEffect(() => {
    const db = getFirestore();
    const unsubscribe = onSnapshot(collection(db, 'cursos'), (snapshot) => {
      const coursesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCourses(coursesData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleAddCourse = async () => {
    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, 'cursos'), courseData);
      console.log('Curso adicionado com ID:', docRef.id);
      // Lógica adicional, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao adicionar o curso:', error);
      // Lógica adicional, como exibir uma mensagem de erro
    }
  };

  const handleAddTrack = async () => {
    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, 'trilhas'), trackData);
      console.log('Trilha adicionada com ID:', docRef.id);
      // Lógica adicional, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao adicionar a trilha:', error);
      // Lógica adicional, como exibir uma mensagem de erro
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, image: file });
  };

  const handleTrackVideoChange = (e) => {
    const video = e.target.value;
    setTrackData({ ...trackData, video });
  };

  const handleTrackContentChange = (e) => {
    const content = e.target.value;
    setTrackData({ ...trackData, content });
  };
 
  // Estilo personalizado para diminuir o tamanho do título
  const CustomTypography = styled(Typography)({
    fontSize: '1.2rem',
  });

  return (
    <Box component="div" sx={{ width: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'right', color: 'purple' }}>Cadastre aqui o que você quer exibir para o seu usuário!</h2>

      <CustomTypography variant="h2">Adicionar Curso</CustomTypography>

      <Card sx={{ p: 2, mt: 2 }}>
        <form onSubmit={handleAddCourse}>
          <TextField
            label="Título"
            variant="outlined"
            value={courseData.title}
            onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Descrição"
            variant="outlined"
            value={courseData.description}
            onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
            margin="normal"
            fullWidth
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ margin: '1rem 0' }}
          />
          <div>
            <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Adicionar Curso
            </Button>
          </div>
        </form>
      </Card>

      <CustomTypography variant="h2">Alterar conteúdo da página sobre</CustomTypography>

      <Card sx={{ p: 2, mt: 2 }}>
        <form onSubmit={handleSubmit}>
         
          <TextField
            label="Conteúdo"
            variant="outlined"
           
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
            
            margin="normal"
            fullWidth
            required
          />
          
          <div>
            <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Adicionar
            </Button>
          </div>
        </form>
      </Card>

      <Box sx={{ mt: 4 }}>
        <CustomTypography variant="h2">Adicionar Trilha</CustomTypography>
      
        <Card sx={{ p: 2 }}>
          <form onSubmit={handleAddTrack}>
            <TextField
              label="Título da Aula"
              variant="outlined"
              value={trackData.title}
              onChange={(e) => setTrackData({ ...trackData, title: e.target.value })}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Vídeo"
              variant="outlined"
              value={trackData.video}
              onChange={handleTrackVideoChange}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Conteúdo da Aula"
              variant="outlined"
              value={trackData.content}
              onChange={handleTrackContentChange}
              margin="normal"
              fullWidth
              required
              multiline
              rows={4}
            />
            <TextField
              label="Resumo"
              variant="outlined"
              value={trackData.summary}
              onChange={(e) => setTrackData({ ...trackData, summary: e.target.value })}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="PDF"
              variant="outlined"
              value={trackData.pdf}
              onChange={(e) => setTrackData({ ...trackData, pdf: e.target.value })}
              margin="normal"
              fullWidth
              required
            />
         
            <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Adicionar Trilha
            </Button>
          </form>
        </Card>
      </Box>

      <Box sx={{mt:4}}>
      <CustomTypography variant="h2">Alterar cor dos botões do menu </CustomTypography>
      <Card sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
      <TextField
              label="Digite a cor desejada"
              variant="outlined"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              margin="normal"
              fullWidth
              
            />
        
        <div>
         <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Alterar cor
            </Button>
        </div>
       
      </form>
      </Card>
       
      <CustomTypography variant="h2">Alterar conteúdo da landing page</CustomTypography>

<Card sx={{ p: 2, mt: 2 }}>
  <form onSubmit={handleSubmit}>
   
    <TextField
      label="Conteúdo 1"
      variant="outlined"
     
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
      
      margin="normal"
      fullWidth
      required
    />
    
    <div>
      <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
        Alterar
      </Button>
    </div>
  </form>

  <form onSubmit={handleSubmit}>
   
    <TextField
      label="Conteúdo "
      variant="outlined"
     
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
      
      margin="normal"
      fullWidth
      required
    />
    
    <div>
      <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
        Alterar
      </Button>
    </div>
  </form>
</Card>

      <CustomTypography variant="h2">Alterar conteúdo da página soluções</CustomTypography>

      <Card sx={{ p: 2, mt: 2 }}>
        <form onSubmit={handleSubmit}>
         
          <TextField
            label="Conteúdo"
            variant="outlined"
           
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
            
            margin="normal"
            fullWidth
            required
          />
          
          <div>
            <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Adicionar
            </Button>
          </div>
        </form>
      </Card>
      </Box>
      <Box sx={{mt:4}}>
      <CustomTypography variant="h2">Alterar cor do plano de fundo do menu </CustomTypography>
      <Card sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
      <TextField
              label="Digite a cor desejada"
              variant="outlined"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              margin="normal"
              fullWidth
              
            />
        
        <div>
         <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Alterar cor
            </Button>
        </div>
       
      </form>
      </Card>
      </Box>
      <Box sx={{mt:4}}>
      <CustomTypography variant="h2">Alterar cor dos demais botões(todos) </CustomTypography>
      <Card sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
      <TextField
              label="Digite a cor desejada"
              variant="outlined"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              margin="normal"
              fullWidth
              
            />
        
        <div>
         <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Alterar cor
            </Button>
        </div>
       
      </form>
      </Card>
      </Box>

      <GetStarted courses={courses} />
    </Box>
  );
};

export default AdminPanel;



