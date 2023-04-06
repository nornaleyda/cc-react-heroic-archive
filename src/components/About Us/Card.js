import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

function ProfileCard() {
  return (
    <Box
      sx={{
        perspective: "1000px",
        transition: "transform 0.5s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "rotateY(15deg)",
            "& > div:nth-child(2)": {
              transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
            },
            "& > div:nth-child(3)": {
              transform: "translate3d(45px, 50px, 40px)",
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: "280px",
          width: 320,
          backgroundColor: "#000",
          borderColor: "#000",
        }}
      >
        <CardCover
          sx={{
            border: "1px solid",
            borderColor: "#777",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent
          sx={{
            alignItems: "self-end",
            justifyContent: "flex-end",
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff" m={3}>
            Johanan Samuel{" "}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProfileCard;
