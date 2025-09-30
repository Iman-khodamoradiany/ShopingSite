import { Link } from "react-router-dom";
import { NavBarList } from "../../../../core/Constans/NavBarList";

function NavBarLink() {
    return (
        <div>
            <ul className="flex justify-center items-center h-full gap-8 text-[1.3vw]">
                {NavBarList.map((item) => (
                    <li key={item.id}>
                        <Link to={item.Link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default NavBarLink