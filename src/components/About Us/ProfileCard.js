import { Box, Card, CardCover, CardContent, Typography } from "@mui/joy";

export default function ProfileCard({ developer }) {
  const { name, biography, lnGithub, lnlinked } = developer;

  return (
    <div className="main-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          perspective: "1000px",
          transition: "transform 0.5s",
          "& > div, & > div > div": {
            transition: "inherit",
          },
          "&:hover": {
            "& > div": {
              transform: "rotateY(10deg)",
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
            minwidth: "375px",
            width: "20vw",
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
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <div className="wrapper-container">
        <div className="text">
          <Typography className="text text-bold">
            <h2>{name}</h2>
          </Typography>
          <Typography className="text">{biography}</Typography>
          <div className="sm-icons">
            <a href={lnGithub} alt="github" target="new">
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="icons"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <a href={lnlinked} alt="linkedln" target="new">
              <svg
                enable-background="new 0 0 32 32"
                height="32px"
                id="Layer_1"
                version="1.0"
                viewBox="0 0 32 32"
                width="32px"
                className="icons"
              >
                <g>
                  <circle
                    clip-rule="evenodd"
                    cx="16"
                    cy="16"
                    fill="#007BB5"
                    fill-rule="evenodd"
                    r="16"
                  />
                  <g>
                    <rect fill="#FFFFFF" height="14" width="4" x="7" y="11" />
                    <path
                      d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z"
                      fill="#FFFFFF"
                    />
                    <circle cx="9" cy="8" fill="#FFFFFF" r="2" />
                  </g>
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
