export default function MyNavigationItem(props: any)
{
    return(
        <nav className="text-gray-100 text-lg first-letter:uppercase hover:text-sky-200 hover:pl-4 ease-out duration-300">{props.name}</nav>
    );
}