import { Box, Typography, Button, Container } from "@mui/material";
import video from "../assets/video.mp4";

export default function Hero1() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      
      {/* Video Background */}
      <Box
        component="video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Box>

          <Typography
            sx={{
              letterSpacing: "4px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Luxury Resort
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "40px", md: "70px" },
              fontWeight: 300,
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            Stay Beyond
            <br />
            Ordinary
          </Typography>

          <Typography
            sx={{
              maxWidth: "500px",
              mb: 4,
              opacity: 0.9,
            }}
          >
            Discover elegant rooms, premium amenities, and unforgettable
            experiences designed for modern travelers.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "#fff",
              color: "#000",
              padding: "12px 30px",
              borderRadius: "30px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                background: "#f5f5f5",
              },
            }}
          >
            Explore Now
          </Button>

        </Box>
      </Container>

    </Box>
  );
}