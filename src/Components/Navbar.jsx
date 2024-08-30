import { AppBar,Toolbar,styled, Typography } from "@mui/material";
import { Pets } from "@mui/icons-material";

const Navbar = () => {
  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="h6">
          Home
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="span">Kamran</Typography>
        </UserBox>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
