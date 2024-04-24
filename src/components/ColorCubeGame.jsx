import React, { useState } from 'react';
import LoaderSimple from './Loading';

export const ColorCubeGame = () => {
  const [score, setScore] = useState(0);
  const [currentCube, setCurrentCube] = useState(0);
  const [round, setRound] = useState(1);
  const [cubes, setCubes] = useState(
    Array.from({ length: 36 }, (_, i) => ({
      id: i,
      color: '#ff0000',
    }))
  );

  const generateCubes = () => {
    const newCubes = [...cubes];
    const oddCubeIndex = Math.floor(Math.random() * newCubes.length);
    switch (round) {
      case 1:
        newCubes[oddCubeIndex].color = '#ff4400';
        break;
      case 2:
        newCubes.forEach((cube, index) => {
          cube.color = '#00ff00';
        });
        newCubes[oddCubeIndex].color = '#4fc93c';
        break;
      
      case 3:
        newCubes.forEach((cube, index) => {
          cube.color = '#1760d2';
        });
        newCubes[oddCubeIndex].color = '#068cdb';
        break;

        case 4:
        newCubes.forEach((cube, index) => {
          cube.color = '#7d186d';
        });
        newCubes[oddCubeIndex].color = '#91197e';
        break;

        case 5:
        newCubes.forEach((cube, index) => {
          cube.color = '#187d2c';
        });
        newCubes[oddCubeIndex].color = '#1b8d3b';
        break;
      
      case 6:
        newCubes.forEach((cube, index) => {
          cube.color = '#ab4842';
        });
        newCubes[oddCubeIndex].color = '#a75148';
        break;
        case 7:
        newCubes.forEach((cube, index) => {
          cube.color = '#34cebb';
        });
        newCubes[oddCubeIndex].color = '#26f2d7';
        break;
      case 8:
        newCubes.forEach((cube, index) => {
          cube.color = '#fd5c4c';
        });
        newCubes[oddCubeIndex].color = '#e96353';
        break;
        case 9:
        newCubes.forEach((cube, index) => {
          cube.color = '#d3b939';
        });
        newCubes[oddCubeIndex].color = '#e0c92c';
        break;
        case 10:
          newCubes.forEach((cube, index) => {
            cube.color = '#008080';
          });
          newCubes[oddCubeIndex].color = '#1b857d';
          break;
     
     
        
      default:
        break;
    }
    setCurrentCube(oddCubeIndex);
    setCubes(newCubes);
  };

  const handleCubeClick = (id) => {
    if (id === currentCube) {
      setScore(score + 1);
      if (round < 11) {
        setRound(round + 1);
        generateCubes();
      } else {
        alert(`Final Score: ${score + 1}`);
        setScore(0);
        setRound(1);
        setCubes(
          Array.from({ length: 36 }, (_, i) => ({
            id: i,
            color: '#ff0000',
          }))
        );
      }
    } else {
      setScore(score);
      if (round < 11) {
        setRound(round + 1);
        generateCubes();
      } else {
        alert(`Final Score: ${score}`);
        setScore(0);
        setRound(1);
        setCubes(
          Array.from({ length: 36 }, (_, i) => ({
            id: i,
            color: '#ff0000',
          }))
        );
      }
    }
  };

  return (
    <>
     <LoaderSimple />
      <div className='font-Raleway'>
        <div className='py-10'>
          <div className='container flex items-center flex-col'>
            <h1 className='sm:text-6xl text-4xl font-medium text-center'>Color Cube Game</h1>
            <div className='max-w-[800px] mt-20 bg-black/95 shadow-2xl border-t-2 rounded-2xl'>
              <div className='max-w-[650px] sm:w-[700px] grid sm:grid-cols-6 grid-cols-4 gap-10 py-10 px-10 sm:px-12'>
                {cubes.map((cube) => (
                  <div
                    className='flex items-center gap-0 w-16 h-16 sm:w-20 sm:h-20 cursor-pointer '
                    key={cube.id}
                    onClick={() => handleCubeClick(cube.id)}
                    style={{
                      backgroundColor: cube.color,
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className='flex flex-col gap-5 items-center mt-16'>
              <table className='border-black border-4 w-[200px] h-[150px] text-center'>
                <tr className='border-black border-4'>
                  <th>Round</th>
                  <th className='border-l-4 border-black'>Score</th>
                  
                </tr>
                <tr>
                  <td>{round-1}/10</td>
                  <td className='border-l-4 border-black'>{score}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorCubeGame;