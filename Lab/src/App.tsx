// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import { useTodos } from './hooks/useTodos';

function App() {
  // TODO: Lab Step 2 - เรียกใช้งาน Custom Hook useTodos()
  // const { ... } = useTodos();
  const {todos, addTodo, deleteTodo, toggleTodo} = useTodos()
  return (
    // TODO: Lab Step 1 - วางโครงสร้าง Routing โดยห่อหุ้มด้วย <BrowserRouter>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
        
        {/* Navigation เมนู */}
        <nav className="mb-8 space-x-4 bg-white p-4 rounded-lg shadow">
          <Link to="/" className="text-blue-600 font-bold hover:underline">Dashboard</Link>
          <Link to="/todos" className="text-blue-600 font-bold hover:underline">Manage Todos</Link>
        </nav>

        {/* พื้นที่แสดงผลของ Route */}
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
          {/* TODO: Lab Step 1 - กำหนด <Routes> และ <Route> สำหรับหน้า '/' และ '/todos' */}
          <Routes>
            {/* ตัวอย่างการส่ง Props ไปยัง Component (ผู้เรียนต้องเอาคอมเมนต์ออกและใส่ Props ให้ถูกต้อง)
              <Route path="/" element={<Home todos={todos} />} /> 
            */}
            <Route path='/' element={<Home todos={todos} />} />
            <Route path='/todos' element={
              <Todos
                todos={todos}
                onAdd={addTodo}
                onDelete={deleteTodo}
                onCompletedChange={toggleTodo}
              />
            } />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;