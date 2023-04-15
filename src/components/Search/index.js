import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import PopperWrapper from '@/components/Wrapper';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchItem from '../SearchItem';
import PacketServices from '@/services/PacketServices';
import './Search.scss';
import useDebounce from '@/hooks/useDebounce';

function Search({ className }) {
    const [searchValue, setSearchValue] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 700);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await PacketServices.search(debounce);
            setSearchResult(result);
        };

        fetchApi();
    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <>
            <TippyHeadless
                interactive
                placement="bottom"
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className="search-result" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className="search-title">Packets</h4>
                            {searchResult.map((result) => {
                                return <SearchItem key={result._id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={`search ${className}`}>
                    <input
                        className="search-input"
                        value={searchValue}
                        placeholder="Choose your packets"
                        spellCheck={false}
                        onChange={handleChange}
                        ref={inputRef}
                        onFocus={() => setShowResult(true)}
                    />

                    <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </button>
                </div>
            </TippyHeadless>
        </>
    );
}

export default Search;
