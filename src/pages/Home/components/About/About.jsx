import {Heading, Stack} from '../../../../components';
import './About.css';

export const About = () => {
    return (
        <section id="about">
            <Stack className="about-columns" justify="space-between">
                <Stack.Item
                    className="about-left-column"
                    vertical
                    gap="2.25rem"
                    basis="50%"
                >
                    <Stack.Item vertical>
                        <Heading>Little Lemon</Heading>
                        <p>Chicago</p>
                    </Stack.Item>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Stack.Item>

                <section className="about-right-column">
                    <section id="about-images">
                        <div id="about-first-image">
                            <img
                                src="https://ik.imagekit.io/a6adhai64/coursera/little_lemon/reviews/top-view-table-full-food.jpg?updatedAt=1756437971097"
                                alt="Little Lemon - Burritos"
                            />
                        </div>
                        <div id="about-second-image">
                            <img
                                src="https://ik.imagekit.io/a6adhai64/coursera/little_lemon/reviews/top-view-table.jpg?updatedAt=1756437970805"
                                alt="Little Lemon - Pastas"
                            />
                        </div>
                    </section>
                </section>
            </Stack>
        </section>
    );
};
