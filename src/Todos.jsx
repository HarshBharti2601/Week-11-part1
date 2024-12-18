import { useQuery, useQueryClient } from "@tanstack/react-query";
import getter from "./Getter";

function Todos(){
    const queryClient = useQueryClient();

    const query = useQuery({queryKey:['todos'],queryFn:getter,refetchInterval:10*1000})
    return(
        <div>
            <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
        </div>
    )
}

export default Todos;