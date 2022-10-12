import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import BlogItem from "../blogItem";

const testItem = {
  item: {
    featuredImage: {
      url: "https://images.ctfassets.net/lf5eayovl6p3/6V9KUjlx6ltPZx5crDN1RB/3531425ea11a806514f2f7736307cee0/Blog_Banner_560x315_px__2_.png",
      title: "Title",
    },
    excerpt: "excerpt",
    title: "title",
    slug: "slug",
  },
};

describe("Blog Item", () => {
  it("should render correctly with no props", () => {
    //const component = render(<BlogItem item={testItem.item} />);
    //expect(component).toMatchSnapshot();
  });
});
