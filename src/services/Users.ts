import { LoginFailure, LoginSuccess, User } from "@interfaces/index";

export const getUsers = async (): Promise<User[]> => {
  return [{
    id: 1,
    name: 'Mike Johnson',
    email: 'mike.admin@barbershop.com',
    password: 'password123',
    role: 'admin',
    shopName: 'Mike\'s Classic Cuts'
  }, {
    id: 2,
    name: 'David Smith',
    email: 'david.smith@gmail.com',
    password: 'password123',
    role: 'client',
    preferredService: 'haircut'
  }]
}



export const login = async (
  email: string,
  password: string
): Promise<LoginSuccess | LoginFailure> => {
  const users = await getUsers();
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
}

export const logout = async (): Promise<boolean> => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error during logout:', error);
    return false;
  }
}



