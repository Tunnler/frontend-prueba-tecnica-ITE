import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";


// Define the shape of the user data
interface User {
  id: number;
  nombre: string;
  email: string;
  created_at: string;
}

export default function App() {

  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then((data: User[]) => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <Table
        aria-label="User data table"
        defaultSelectedKeys={["2"]}
        selectionMode="single"
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>NOMBRE</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>CREATED AT</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.nombre}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{new Date(user.created_at).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
}
