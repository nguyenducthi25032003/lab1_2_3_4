import { useState, useEffect } from "react";
const tabs = ['posts', 'comments', 'albums',];
const Mount = () => {
  //2 đối số
  //useEffect (callback, (deps))
  //đoói số đầu tiên là hàm callback, là hàm do chúng ta tự tạo
  //depnentcies (Không bắt buộc)
  //useEffect(callback)
  //-callback đc gọi mỗi khi component re-render
  const [title, setTitle] = useState<string>("");
  const [posts, setPosts] = useState<any[]>([]);
  const [type, setType] = useState<string>("posts");
  useEffect(() => {
    console.log("mounted", type);
    fetch(`http://localhost:3001/posts`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  return (
    <div>
      <h1>Quý lè</h1>
      {tabs.map((tab,index) => (
        <button 
        onClick={() => setType(tab)}
        style={type === tab ? {
            color:'#fff',
            backgroundColor:'red',

        }: {}}
        key={index}>{tab}</button>
      )
      )}
    
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mount;
