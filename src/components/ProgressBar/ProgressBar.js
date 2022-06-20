import React, {useEffect, useContext, useState} from 'react';
import { AuthContext } from '../../Contexts';
import { BackgroundBar, IndicatorBar, PrograssContainer, TextIndicator } from './StylesOfProgressBar';

// Versão do componente em classe
// class ProgressBar extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       progress: 0
//     }

//     this.getAllFinished = this.getAllFinished.bind(this);
//     this.getPorcentProgress = this.getPorcentProgress.bind(this);
//   }
//   static contextType = AuthContext;

//   getAllFinished() {
//     const {exerciceData} = this.context;
//     const arrayObj = Object.keys(exerciceData);
//     const getFinished = arrayObj.map((dificulty) => exerciceData[dificulty].filter((exercices) => exercices.finished).length)
//     const sumAllItems = getFinished.reduce((number, acc) => number+acc, 0);
//     return sumAllItems
//   }

//   getPorcentProgress() {
//     const {user} = this.context;
//     const calculateProgress = (100 / this.getAllFinished()) * user.all;
//     return calculateProgress;
//   }

//   componentDidMount() {
//     this.setState({
//       progress: this.getPorcentProgress()
//     })
//   }

//   render() {
//     return (
//       <PrograssContainer>
//         <TextIndicator>{this.state.progress}%</TextIndicator>
//         <BackgroundBar/>
//         <IndicatorBar
//           progress={this.state.progress}/>
//       </PrograssContainer>
//     )
//   }
// }

function ProgressBar() {

  const {user, exerciceData} = useContext(AuthContext)
  const [progress, setProgress] = useState(0);

    const getAllFinished = () => {
      const arrayObj = Object.keys(exerciceData);
      const getFinished = arrayObj.map((dificulty) => exerciceData[dificulty].filter((exercices) => exercices.finished).length)
      const sumAllItems = getFinished.reduce((number, acc) => number+acc, 0);
      return sumAllItems
  }

  const updateProgress = () => {
    const calculateProgress = (100 / getAllFinished()) * user.all;
    setProgress(calculateProgress);
  }

  useEffect(() => {
    updateProgress();
  }, [user])


  return(
      <PrograssContainer>
        <TextIndicator>{progress}%</TextIndicator>
        <BackgroundBar/>
        <IndicatorBar
          progress={progress}/>
      </PrograssContainer>
  )
}

export default ProgressBar;
