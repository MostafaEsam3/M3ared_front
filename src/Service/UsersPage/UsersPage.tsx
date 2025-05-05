// src/pages/UsersPage.tsx
import { useCrud } from './../GeniricService/useCrud';
import { useState } from 'react';

export const UsersPage = () => {
  const { getQuery, create, remove } = useCrud('/colors', undefined, {
    staleTime: 1000 * 30,
    refetchOnMount: true,
  });

  const [formData, setFormData] = useState<{
    name: string;
    image: File | null;
    status: string;
  }>({
    name: '',
    image: null,
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, files } = e.target;

    if (type == 'file' && files && files.length > 0) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('status', formData.status);
      if (formData.image) {
        data.append('image', formData.image); // Must be File object
      }
      console.log('FormData:', data); // Debugging line


      await create({
        name: "coloeeerdddrrr",
        hexa: "#00330",  
        status: 1,
      }); // Pass the FormData object

      // Reset form (including file input)
      setFormData({
        name: '',
        image: null,
        status: '',
      });

      // Also reset file input manually
      const fileInput = document.getElementById('imageInput') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (err) {
      console.error('Failed to create user:', err);
    }
  };

  if (getQuery.isLoading) return <div>Loading...</div>;
  if (getQuery.isError) return <div>Error loading users.</div>;

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          id="imageInput"
          type="file"
          name="image"
          accept="image/jpeg,image/png,image/jpg,image/gif,image/svg+xml"
          onChange={handleChange}
        />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
        />

        <button type="submit">Create User</button>
      </form>

      {getQuery.data?.map((user: any) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => remove(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
