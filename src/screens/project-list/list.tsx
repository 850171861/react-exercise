import {User} from "screens/project-list/search-panel"

interface Project {
    id:string;
    name:string;
    personId:string;
    pin:boolean;
    organization:string;
}

interface listProps{
    list: Project[];
    users: User[];
}

export const List = ({list,users}:listProps) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{users.find(user => user.id === project.personId)?.name || '找不到'}</td>
                </tr>)
            }
        </tbody>
    </table>
}