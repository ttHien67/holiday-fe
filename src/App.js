import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { privateRoutes, publicRoutes } from './routes';
import DefaultLayout from './Layouts/DefaultLayouts';
import ManagementLayout from '@/Layouts/Management';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Component = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>

                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Component = route.component;
                        const Layout = ManagementLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
