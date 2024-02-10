import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data = [
  {
    rank: 1,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 2,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 3,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 4,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 5,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 6,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 7,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 8,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 9,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
  {
    rank: 10,
    name: 'Meta VAO',
    author: 'Jean Dao',
    price: '$0.0567832',
    profit: '40%',
    investor: '2',
  },
];

const ProjectTable = () => {
  return (
    <div className="mt-8 flex justify-center">
      <Table className="w-[1190px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead className="text-left">Project</TableHead>
            <TableHead className="text-left">Created By</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-left">Profit Made</TableHead>
            <TableHead className="text-left">Investors</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow className="p-4">
              <TableCell className="font-medium text-2xl text-gray-500">
                {' '}
                #<span className="text-white"> {item.rank}</span>
              </TableCell>
              <TableCell className="text-lg">{item.name}</TableCell>
              <TableCell className="text-lg">{item.author}</TableCell>
              <TableCell className="text-lg">{item.price}</TableCell>
              <TableCell className="text-lg">{item.profit}</TableCell>
              <TableCell className="text-lg text-left">
                {item.investor}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTable;
