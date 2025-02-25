import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

// Define the shape of the user and post data
interface User {
  id: number;
  nombre: string;
  email: string;
  created_at: string;
}

interface Post {
  id: number;
  titulo: string;
  contenido: string;
  usuario_id: number;
  created_at: string;
}

export default function PostsTable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch posts data from the backend
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then((data: Post[]) => setPosts(data))
      .catch(error => console.error('Error fetching posts data:', error));

    // Fetch users data from the backend
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then((data: User[]) => setUsers(data))
      .catch(error => console.error('Error fetching users data:', error));
  }, []);

  // Function to get user name by user ID
  const getUserName = (usuarioId: number) => {
    const user = users.find(user => user.id === usuarioId);
    return user ? user.nombre : 'Unknown';
  };

  return (
    <div className="flex flex-col gap-3">
      <Table
        aria-label="Posts data table"
        defaultSelectedKeys={["2"]}
        selectionMode="single"
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>TITULO</TableColumn>
          <TableColumn>CONTENIDO</TableColumn>
          <TableColumn>USUARIO</TableColumn>
          <TableColumn>CREATED AT</TableColumn>
        </TableHeader>
        <TableBody>
          {posts.map(post => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.titulo}</TableCell>
              <TableCell>{post.contenido}</TableCell>
              <TableCell>{getUserName(post.usuario_id)}</TableCell>
              <TableCell>{new Date(post.created_at).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
