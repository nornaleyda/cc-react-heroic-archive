import ProfileCard from "./Card";

function AboutUs() {
  return (
    <div className="wrapper-container">
      <div className="flex-container">
        <div className="box-div">
          <ProfileCard />
        </div>
        <div className="box-details">
          <h3>Name: Johanan</h3>
          <p>
            Bio: It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <p>
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>

          <a href="maito:johanansamuel7^@gmail.com">
            johanansamuel76@gmail.com
          </a>
          <div>
            <img
              className="icons"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMS4xMDQgMy43NTVMMTguMTggMy43NWMtMy4yODQgMC01LjQwNiAyLjE3My01LjQwNiA1LjUzN3YyLjU1M2gtMi45NGEuNDYuNDYgMCAwMC0uNDU5LjQ2djMuNjk4YzAgLjI1NC4yMDYuNDYuNDYuNDZoMi45Mzl2OS4zMzNjMCAuMjU0LjIwNS40NTkuNDYuNDU5aDMuODM0YS40Ni40NiAwIDAwLjQ2LS40NTl2LTkuMzM0aDMuNDM2YS40Ni40NiAwIDAwLjQ2LS40NTlsLjAwMi0zLjY5OWEuNDYuNDYgMCAwMC0uNDYtLjQ1OWgtMy40MzhWOS42NzZjMC0xLjA0LjI0OC0xLjU2OCAxLjYwNi0xLjU2OGgxLjk3YS40Ni40NiAwIDAwLjQ1OS0uNDZWNC4yMTNhLjQ1OS40NTkgMCAwMC0uNDYtLjQ1OHoiLz48L2c+PC9nPjwvc3ZnPg=="
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjU4MyAyMy43NWgzLjMzNGMuNDYgMCAuODMzLS4zMTYuODMzLS43MDV2LTEyLjM0YzAtLjM5LS4zNzMtLjcwNS0uODMzLS43MDVINC41ODNjLS40NiAwLS44MzMuMzE2LS44MzMuNzA1djEyLjM0YzAgLjM5LjM3My43MDUuODMzLjcwNXptMC0xNi4yNWgzLjMzNGMuNDYgMCAuODMzLS4zMDIuODMzLS42NzV2LTIuNGMwLS4zNzMtLjM3My0uNjc1LS44MzMtLjY3NUg0LjU4M2MtLjQ2IDAtLjgzMy4zMDItLjgzMy42NzV2Mi40YzAgLjM3My4zNzMuNjc1LjgzMy42NzV6bTIwLjU3NSAzLjE1NmMtLjQwOS0uNTU1LTEuMDEtMS4wMTItMS44MDYtMS4zNy0uNzk1LS4zNTctMS42NzMtLjUzNi0yLjYzNC0uNTM2LTEuOTUgMC0zLjYwMy43Ny00Ljk1OCAyLjMwOC0uMjcuMzA2LS40NjYuMjQtLjQ2Ni0uMTc1di0xYS43MzcuNzM3IDAgMDAtLjcyNS0uNzQ5aC0yLjU5NGMtLjQgMC0uNzI1LjMzNi0uNzI1Ljc1VjIzYzAgLjQxNC4zMjUuNzUuNzI1Ljc1aDIuOTA0Yy40IDAgLjcyNS0uMzM2LjcyNS0uNzV2LTQuNTZjMC0xLjkuMTExLTMuMjAzLjMzMy0zLjkwOGEzLjIyMSAzLjIyMSAwIDAxMS4yMzItMS42OTdjLjYtLjQyNyAxLjI3Ni0uNjQgMi4wMy0uNjQuNTkgMCAxLjA5My4xNDkgMS41MTEuNDQ4LjQxOS4yOTkuNzIuNzE4LjkwNyAxLjI1Ny4xODYuNTM5LjI3OSAxLjcyNy4yNzkgMy41NjNWMjNjMCAuNDE0LjMyNC43NS43MjUuNzVoMi45MDRjLjQgMCAuNzI1LS4zMzYuNzI1LS43NXYtNy40MjhjMC0xLjMxMy0uMDgtMi4zMjItLjI0LTMuMDI2YTUuMDMyIDUuMDMyIDAgMDAtLjg1Mi0xLjg5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMC4wNCAzLjc1YTYuMjE3IDYuMjE3IDAgMDE2LjIxIDYuMjF2MTAuMDhhNi4yMTcgNi4yMTcgMCAwMS02LjIxIDYuMjFIOS45NmE2LjIxNiA2LjIxNiAwIDAxLTYuMjEtNi4yMVY5Ljk2YTYuMjE3IDYuMjE3IDAgMDE2LjIxLTYuMjF6bTAgMS45OTZIOS45NmE0LjIxOCA0LjIxOCAwIDAwLTQuMjE0IDQuMjEzdjEwLjA4MmE0LjIxOCA0LjIxOCAwIDAwNC4yMTMgNC4yMTNoMTAuMDgyYTQuMjE4IDQuMjE4IDAgMDA0LjIxMy00LjIxM1Y5Ljk1OWE0LjIxOCA0LjIxOCAwIDAwLTQuMjEzLTQuMjEzek0xNSA5LjEwN0E1LjkgNS45IDAgMDEyMC44OTMgMTUgNS45IDUuOSAwIDAxMTUgMjAuODkzIDUuOSA1LjkgMCAwMTkuMTA3IDE1IDUuOSA1LjkgMCAwMTE1IDkuMTA3em0wIDIuMDNBMy44NjggMy44NjggMCAwMDExLjEzNiAxNWMwIDIuMTMgMS43MzQgMy44NjQgMy44NjQgMy44NjRTMTguODY0IDE3LjEzIDE4Ljg2NCAxNSAxNy4xMyAxMS4xMzYgMTUgMTEuMTM2ek0yMS4xNiA3LjVhMS4zNDIgMS4zNDIgMCAwMS45NDggMi4yODdjLS4yNS4yNDgtLjU5NC4zOTItLjk0Ny4zOTJhMS4zNSAxLjM1IDAgMDEtLjk0Ni0uMzkyIDEuMzUyIDEuMzUyIDAgMDEtLjM5NC0uOTQ4IDEuMzQ0IDEuMzQ0IDAgMDExLjM0LTEuMzM5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="box-div">
          <ProfileCard />
        </div>
        <div className="box-details">
          <h3>Name: Johanan</h3>
          <p>
            Bio: It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <p>
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>

          <a href="maito:johanansamuel7^@gmail.com">
            johanansamuel76@gmail.com
          </a>
          <div>
            <img
              className="icons"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMS4xMDQgMy43NTVMMTguMTggMy43NWMtMy4yODQgMC01LjQwNiAyLjE3My01LjQwNiA1LjUzN3YyLjU1M2gtMi45NGEuNDYuNDYgMCAwMC0uNDU5LjQ2djMuNjk4YzAgLjI1NC4yMDYuNDYuNDYuNDZoMi45Mzl2OS4zMzNjMCAuMjU0LjIwNS40NTkuNDYuNDU5aDMuODM0YS40Ni40NiAwIDAwLjQ2LS40NTl2LTkuMzM0aDMuNDM2YS40Ni40NiAwIDAwLjQ2LS40NTlsLjAwMi0zLjY5OWEuNDYuNDYgMCAwMC0uNDYtLjQ1OWgtMy40MzhWOS42NzZjMC0xLjA0LjI0OC0xLjU2OCAxLjYwNi0xLjU2OGgxLjk3YS40Ni40NiAwIDAwLjQ1OS0uNDZWNC4yMTNhLjQ1OS40NTkgMCAwMC0uNDYtLjQ1OHoiLz48L2c+PC9nPjwvc3ZnPg=="
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjU4MyAyMy43NWgzLjMzNGMuNDYgMCAuODMzLS4zMTYuODMzLS43MDV2LTEyLjM0YzAtLjM5LS4zNzMtLjcwNS0uODMzLS43MDVINC41ODNjLS40NiAwLS44MzMuMzE2LS44MzMuNzA1djEyLjM0YzAgLjM5LjM3My43MDUuODMzLjcwNXptMC0xNi4yNWgzLjMzNGMuNDYgMCAuODMzLS4zMDIuODMzLS42NzV2LTIuNGMwLS4zNzMtLjM3My0uNjc1LS44MzMtLjY3NUg0LjU4M2MtLjQ2IDAtLjgzMy4zMDItLjgzMy42NzV2Mi40YzAgLjM3My4zNzMuNjc1LjgzMy42NzV6bTIwLjU3NSAzLjE1NmMtLjQwOS0uNTU1LTEuMDEtMS4wMTItMS44MDYtMS4zNy0uNzk1LS4zNTctMS42NzMtLjUzNi0yLjYzNC0uNTM2LTEuOTUgMC0zLjYwMy43Ny00Ljk1OCAyLjMwOC0uMjcuMzA2LS40NjYuMjQtLjQ2Ni0uMTc1di0xYS43MzcuNzM3IDAgMDAtLjcyNS0uNzQ5aC0yLjU5NGMtLjQgMC0uNzI1LjMzNi0uNzI1Ljc1VjIzYzAgLjQxNC4zMjUuNzUuNzI1Ljc1aDIuOTA0Yy40IDAgLjcyNS0uMzM2LjcyNS0uNzV2LTQuNTZjMC0xLjkuMTExLTMuMjAzLjMzMy0zLjkwOGEzLjIyMSAzLjIyMSAwIDAxMS4yMzItMS42OTdjLjYtLjQyNyAxLjI3Ni0uNjQgMi4wMy0uNjQuNTkgMCAxLjA5My4xNDkgMS41MTEuNDQ4LjQxOS4yOTkuNzIuNzE4LjkwNyAxLjI1Ny4xODYuNTM5LjI3OSAxLjcyNy4yNzkgMy41NjNWMjNjMCAuNDE0LjMyNC43NS43MjUuNzVoMi45MDRjLjQgMCAuNzI1LS4zMzYuNzI1LS43NXYtNy40MjhjMC0xLjMxMy0uMDgtMi4zMjItLjI0LTMuMDI2YTUuMDMyIDUuMDMyIDAgMDAtLjg1Mi0xLjg5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMC4wNCAzLjc1YTYuMjE3IDYuMjE3IDAgMDE2LjIxIDYuMjF2MTAuMDhhNi4yMTcgNi4yMTcgMCAwMS02LjIxIDYuMjFIOS45NmE2LjIxNiA2LjIxNiAwIDAxLTYuMjEtNi4yMVY5Ljk2YTYuMjE3IDYuMjE3IDAgMDE2LjIxLTYuMjF6bTAgMS45OTZIOS45NmE0LjIxOCA0LjIxOCAwIDAwLTQuMjE0IDQuMjEzdjEwLjA4MmE0LjIxOCA0LjIxOCAwIDAwNC4yMTMgNC4yMTNoMTAuMDgyYTQuMjE4IDQuMjE4IDAgMDA0LjIxMy00LjIxM1Y5Ljk1OWE0LjIxOCA0LjIxOCAwIDAwLTQuMjEzLTQuMjEzek0xNSA5LjEwN0E1LjkgNS45IDAgMDEyMC44OTMgMTUgNS45IDUuOSAwIDAxMTUgMjAuODkzIDUuOSA1LjkgMCAwMTkuMTA3IDE1IDUuOSA1LjkgMCAwMTE1IDkuMTA3em0wIDIuMDNBMy44NjggMy44NjggMCAwMDExLjEzNiAxNWMwIDIuMTMgMS43MzQgMy44NjQgMy44NjQgMy44NjRTMTguODY0IDE3LjEzIDE4Ljg2NCAxNSAxNy4xMyAxMS4xMzYgMTUgMTEuMTM2ek0yMS4xNiA3LjVhMS4zNDIgMS4zNDIgMCAwMS45NDggMi4yODdjLS4yNS4yNDgtLjU5NC4zOTItLjk0Ny4zOTJhMS4zNSAxLjM1IDAgMDEtLjk0Ni0uMzkyIDEuMzUyIDEuMzUyIDAgMDEtLjM5NC0uOTQ4IDEuMzQ0IDEuMzQ0IDAgMDExLjM0LTEuMzM5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="box-div">
          <ProfileCard />
        </div>
        <div className="box-details">
          <h3>Name: Johanan</h3>
          <p>
            Bio: It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <p>
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>

          <a href="maito:johanansamuel7^@gmail.com">
            johanansamuel76@gmail.com
          </a>
          <div>
            <img
              className="icons"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMS4xMDQgMy43NTVMMTguMTggMy43NWMtMy4yODQgMC01LjQwNiAyLjE3My01LjQwNiA1LjUzN3YyLjU1M2gtMi45NGEuNDYuNDYgMCAwMC0uNDU5LjQ2djMuNjk4YzAgLjI1NC4yMDYuNDYuNDYuNDZoMi45Mzl2OS4zMzNjMCAuMjU0LjIwNS40NTkuNDYuNDU5aDMuODM0YS40Ni40NiAwIDAwLjQ2LS40NTl2LTkuMzM0aDMuNDM2YS40Ni40NiAwIDAwLjQ2LS40NTlsLjAwMi0zLjY5OWEuNDYuNDYgMCAwMC0uNDYtLjQ1OWgtMy40MzhWOS42NzZjMC0xLjA0LjI0OC0xLjU2OCAxLjYwNi0xLjU2OGgxLjk3YS40Ni40NiAwIDAwLjQ1OS0uNDZWNC4yMTNhLjQ1OS40NTkgMCAwMC0uNDYtLjQ1OHoiLz48L2c+PC9nPjwvc3ZnPg=="
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjU4MyAyMy43NWgzLjMzNGMuNDYgMCAuODMzLS4zMTYuODMzLS43MDV2LTEyLjM0YzAtLjM5LS4zNzMtLjcwNS0uODMzLS43MDVINC41ODNjLS40NiAwLS44MzMuMzE2LS44MzMuNzA1djEyLjM0YzAgLjM5LjM3My43MDUuODMzLjcwNXptMC0xNi4yNWgzLjMzNGMuNDYgMCAuODMzLS4zMDIuODMzLS42NzV2LTIuNGMwLS4zNzMtLjM3My0uNjc1LS44MzMtLjY3NUg0LjU4M2MtLjQ2IDAtLjgzMy4zMDItLjgzMy42NzV2Mi40YzAgLjM3My4zNzMuNjc1LjgzMy42NzV6bTIwLjU3NSAzLjE1NmMtLjQwOS0uNTU1LTEuMDEtMS4wMTItMS44MDYtMS4zNy0uNzk1LS4zNTctMS42NzMtLjUzNi0yLjYzNC0uNTM2LTEuOTUgMC0zLjYwMy43Ny00Ljk1OCAyLjMwOC0uMjcuMzA2LS40NjYuMjQtLjQ2Ni0uMTc1di0xYS43MzcuNzM3IDAgMDAtLjcyNS0uNzQ5aC0yLjU5NGMtLjQgMC0uNzI1LjMzNi0uNzI1Ljc1VjIzYzAgLjQxNC4zMjUuNzUuNzI1Ljc1aDIuOTA0Yy40IDAgLjcyNS0uMzM2LjcyNS0uNzV2LTQuNTZjMC0xLjkuMTExLTMuMjAzLjMzMy0zLjkwOGEzLjIyMSAzLjIyMSAwIDAxMS4yMzItMS42OTdjLjYtLjQyNyAxLjI3Ni0uNjQgMi4wMy0uNjQuNTkgMCAxLjA5My4xNDkgMS41MTEuNDQ4LjQxOS4yOTkuNzIuNzE4LjkwNyAxLjI1Ny4xODYuNTM5LjI3OSAxLjcyNy4yNzkgMy41NjNWMjNjMCAuNDE0LjMyNC43NS43MjUuNzVoMi45MDRjLjQgMCAuNzI1LS4zMzYuNzI1LS43NXYtNy40MjhjMC0xLjMxMy0uMDgtMi4zMjItLjI0LTMuMDI2YTUuMDMyIDUuMDMyIDAgMDAtLjg1Mi0xLjg5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMC4wNCAzLjc1YTYuMjE3IDYuMjE3IDAgMDE2LjIxIDYuMjF2MTAuMDhhNi4yMTcgNi4yMTcgMCAwMS02LjIxIDYuMjFIOS45NmE2LjIxNiA2LjIxNiAwIDAxLTYuMjEtNi4yMVY5Ljk2YTYuMjE3IDYuMjE3IDAgMDE2LjIxLTYuMjF6bTAgMS45OTZIOS45NmE0LjIxOCA0LjIxOCAwIDAwLTQuMjE0IDQuMjEzdjEwLjA4MmE0LjIxOCA0LjIxOCAwIDAwNC4yMTMgNC4yMTNoMTAuMDgyYTQuMjE4IDQuMjE4IDAgMDA0LjIxMy00LjIxM1Y5Ljk1OWE0LjIxOCA0LjIxOCAwIDAwLTQuMjEzLTQuMjEzek0xNSA5LjEwN0E1LjkgNS45IDAgMDEyMC44OTMgMTUgNS45IDUuOSAwIDAxMTUgMjAuODkzIDUuOSA1LjkgMCAwMTkuMTA3IDE1IDUuOSA1LjkgMCAwMTE1IDkuMTA3em0wIDIuMDNBMy44NjggMy44NjggMCAwMDExLjEzNiAxNWMwIDIuMTMgMS43MzQgMy44NjQgMy44NjQgMy44NjRTMTguODY0IDE3LjEzIDE4Ljg2NCAxNSAxNy4xMyAxMS4xMzYgMTUgMTEuMTM2ek0yMS4xNiA3LjVhMS4zNDIgMS4zNDIgMCAwMS45NDggMi4yODdjLS4yNS4yNDgtLjU5NC4zOTItLjk0Ny4zOTJhMS4zNSAxLjM1IDAgMDEtLjk0Ni0uMzkyIDEuMzUyIDEuMzUyIDAgMDEtLjM5NC0uOTQ4IDEuMzQ0IDEuMzQ0IDAgMDExLjM0LTEuMzM5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="box-div">
          <ProfileCard />
        </div>
        <div className="box-details">
          <h3>Name: Johanan</h3>
          <p>
            Bio: It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <p>
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>

          <a href="maito:johanansamuel7^@gmail.com">
            johanansamuel76@gmail.com
          </a>
          <div>
            <img
              className="icons"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMS4xMDQgMy43NTVMMTguMTggMy43NWMtMy4yODQgMC01LjQwNiAyLjE3My01LjQwNiA1LjUzN3YyLjU1M2gtMi45NGEuNDYuNDYgMCAwMC0uNDU5LjQ2djMuNjk4YzAgLjI1NC4yMDYuNDYuNDYuNDZoMi45Mzl2OS4zMzNjMCAuMjU0LjIwNS40NTkuNDYuNDU5aDMuODM0YS40Ni40NiAwIDAwLjQ2LS40NTl2LTkuMzM0aDMuNDM2YS40Ni40NiAwIDAwLjQ2LS40NTlsLjAwMi0zLjY5OWEuNDYuNDYgMCAwMC0uNDYtLjQ1OWgtMy40MzhWOS42NzZjMC0xLjA0LjI0OC0xLjU2OCAxLjYwNi0xLjU2OGgxLjk3YS40Ni40NiAwIDAwLjQ1OS0uNDZWNC4yMTNhLjQ1OS40NTkgMCAwMC0uNDYtLjQ1OHoiLz48L2c+PC9nPjwvc3ZnPg=="
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjU4MyAyMy43NWgzLjMzNGMuNDYgMCAuODMzLS4zMTYuODMzLS43MDV2LTEyLjM0YzAtLjM5LS4zNzMtLjcwNS0uODMzLS43MDVINC41ODNjLS40NiAwLS44MzMuMzE2LS44MzMuNzA1djEyLjM0YzAgLjM5LjM3My43MDUuODMzLjcwNXptMC0xNi4yNWgzLjMzNGMuNDYgMCAuODMzLS4zMDIuODMzLS42NzV2LTIuNGMwLS4zNzMtLjM3My0uNjc1LS44MzMtLjY3NUg0LjU4M2MtLjQ2IDAtLjgzMy4zMDItLjgzMy42NzV2Mi40YzAgLjM3My4zNzMuNjc1LjgzMy42NzV6bTIwLjU3NSAzLjE1NmMtLjQwOS0uNTU1LTEuMDEtMS4wMTItMS44MDYtMS4zNy0uNzk1LS4zNTctMS42NzMtLjUzNi0yLjYzNC0uNTM2LTEuOTUgMC0zLjYwMy43Ny00Ljk1OCAyLjMwOC0uMjcuMzA2LS40NjYuMjQtLjQ2Ni0uMTc1di0xYS43MzcuNzM3IDAgMDAtLjcyNS0uNzQ5aC0yLjU5NGMtLjQgMC0uNzI1LjMzNi0uNzI1Ljc1VjIzYzAgLjQxNC4zMjUuNzUuNzI1Ljc1aDIuOTA0Yy40IDAgLjcyNS0uMzM2LjcyNS0uNzV2LTQuNTZjMC0xLjkuMTExLTMuMjAzLjMzMy0zLjkwOGEzLjIyMSAzLjIyMSAwIDAxMS4yMzItMS42OTdjLjYtLjQyNyAxLjI3Ni0uNjQgMi4wMy0uNjQuNTkgMCAxLjA5My4xNDkgMS41MTEuNDQ4LjQxOS4yOTkuNzIuNzE4LjkwNyAxLjI1Ny4xODYuNTM5LjI3OSAxLjcyNy4yNzkgMy41NjNWMjNjMCAuNDE0LjMyNC43NS43MjUuNzVoMi45MDRjLjQgMCAuNzI1LS4zMzYuNzI1LS43NXYtNy40MjhjMC0xLjMxMy0uMDgtMi4zMjItLjI0LTMuMDI2YTUuMDMyIDUuMDMyIDAgMDAtLjg1Mi0xLjg5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
            <img
              className="icons"
              srcSet="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzMzMyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjMuNzMiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMC4wNCAzLjc1YTYuMjE3IDYuMjE3IDAgMDE2LjIxIDYuMjF2MTAuMDhhNi4yMTcgNi4yMTcgMCAwMS02LjIxIDYuMjFIOS45NmE2LjIxNiA2LjIxNiAwIDAxLTYuMjEtNi4yMVY5Ljk2YTYuMjE3IDYuMjE3IDAgMDE2LjIxLTYuMjF6bTAgMS45OTZIOS45NmE0LjIxOCA0LjIxOCAwIDAwLTQuMjE0IDQuMjEzdjEwLjA4MmE0LjIxOCA0LjIxOCAwIDAwNC4yMTMgNC4yMTNoMTAuMDgyYTQuMjE4IDQuMjE4IDAgMDA0LjIxMy00LjIxM1Y5Ljk1OWE0LjIxOCA0LjIxOCAwIDAwLTQuMjEzLTQuMjEzek0xNSA5LjEwN0E1LjkgNS45IDAgMDEyMC44OTMgMTUgNS45IDUuOSAwIDAxMTUgMjAuODkzIDUuOSA1LjkgMCAwMTkuMTA3IDE1IDUuOSA1LjkgMCAwMTE1IDkuMTA3em0wIDIuMDNBMy44NjggMy44NjggMCAwMDExLjEzNiAxNWMwIDIuMTMgMS43MzQgMy44NjQgMy44NjQgMy44NjRTMTguODY0IDE3LjEzIDE4Ljg2NCAxNSAxNy4xMyAxMS4xMzYgMTUgMTEuMTM2ek0yMS4xNiA3LjVhMS4zNDIgMS4zNDIgMCAwMS45NDggMi4yODdjLS4yNS4yNDgtLjU5NC4zOTItLjk0Ny4zOTJhMS4zNSAxLjM1IDAgMDEtLjk0Ni0uMzkyIDEuMzUyIDEuMzUyIDAgMDEtLjM5NC0uOTQ4IDEuMzQ0IDEuMzQ0IDAgMDExLjM0LTEuMzM5eiIvPjwvZz48L2c+PC9zdmc+"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
