var dropdown=true;
function nav_menu_click()
{
    if(dropdown)
    {
        document.getElementById('nav_content').style.display='block';
        dropdown=false;
    }
    else
    {
        document.getElementById('nav_content').style.display='none';
        dropdown=true;
    }
}