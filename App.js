import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Switch } from 'react-native'; // Adicione essa importação no topo


export default function App() {

  const [idade, setIdade] = useState(0);
  const [ehClienteVip, setEhClienteVip] = useState(false);
  const [rendaMensal , setRendaMensal] = useState(0);
  const [scoreCredito, setScoreCredito] = useState(0);
  const [resultado, setResultado] = useState("");
  


  function toggleVerificarEmprestimo() {
    if (
      idade >= 18 && (rendaMensal >= 2000 && scoreCredito >= 600) 
      || 
      (ehClienteVip === true && idade >= 18)
    ) {
      setResultado("APROVADO");
    } else {
      setResultado("NEGADO");
    }
  }
  

  return (
    <View style={styles.container}>
      
      <View style={styles.title}>
        <Text style = {styles.titleText}>TENTE PEGAR UM EMPRESTIMO! PRIMEIRO FORNEÇA OS DADOS!</Text>
      </View>

      <View style={styles.content}>
        <Text style = {styles.text}>Informe sua idade: </Text>
        <TextInput style = {styles.textInput}
        placeholder="digite sua idade aqui"
        onChangeText={newText => setIdade(newText)}
        />
        <Text>{idade}</Text>
        
        <Text style={styles.text}>Informe se é cliente VIP:</Text>
<Switch
  value={ehClienteVip}
  onValueChange={(value) => setEhClienteVip(value)}
/>
<Text>{ehClienteVip ? "Cliente VIP" : "Cliente comum"}</Text>

<Text style={styles.text}>Informe sua renda mensal: </Text>
<TextInput
  style={styles.textInput}
  placeholder="digite sua renda aqui"
  keyboardType="numeric"
  onChangeText={text => setRendaMensal(Number(text))}
/>
<Text>{rendaMensal}</Text>

<Text style={styles.text}>Informe seu score de crédito: </Text>
<TextInput
  style={styles.textInput}
  placeholder="digite seu score aqui"
  keyboardType="numeric"
  onChangeText={text => setScoreCredito(Number(text))}
/>
<Text>{scoreCredito}</Text>


        <TouchableOpacity style = {styles.button}
        onPress={toggleVerificarEmprestimo}
        >
          VERIFICAR EMPRESTIMO
        </TouchableOpacity>

        {resultado !== "" && <Text style={{ color: resultado === "APROVADO" ? "green" : "red" }}>Resultado: {resultado}</Text>}


        
      </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: "black",
    borderRadius: 10,
    width:"100%",
    maxWidth:"50%",
    padding:14,
  },
  titleText: {
    fontSize: 24,
    fontWeight:500,
    color: "#32CD32",
  },
  content: {
    backgroundColor: "black",
    borderRadius: 10,
    width:"100%",
    maxWidth:"50%",
    padding:8,
    margin:8,
  },
  text: {
    color: "#32CD32",
    paddingTop:10,
    paddingBottom:10,
  },
  textInput: {
    color: "#32CD32",
    border: "solid 1px",
    borderColor: "white",
    borderRadius: 4,
    padding: 10,
  },
  button: {
    color: "white",
    border: "solid 1px",
    borderColor: "white",
    marginTop: 20,
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
  }


});
